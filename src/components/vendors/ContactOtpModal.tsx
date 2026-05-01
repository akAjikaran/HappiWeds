'use client';

import React, { useMemo, useState } from 'react';

type ContactOtpModalProps = {
  vendorName: string;
  vendorPhone: string;
};

function normalizeSriLankanMobile(value: string) {
  const compact = value.replace(/[\s-]/g, '');

  if (/^0[7][0-9]{8}$/.test(compact)) {
    return `+94${compact.slice(1)}`;
  }

  if (/^\+947[0-9]{8}$/.test(compact)) {
    return compact;
  }

  if (/^947[0-9]{8}$/.test(compact)) {
    return `+${compact}`;
  }

  return null;
}

export default function ContactOtpModal({ vendorName, vendorPhone }: ContactOtpModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<'enquiry' | 'contact'>('enquiry');
  const [phone, setPhone] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);

  const normalizedPhone = useMemo(() => normalizeSriLankanMobile(phone), [phone]);
  const showError = phone.trim().length > 0 && !normalizedPhone;

  function openModal(nextIntent: 'enquiry' | 'contact') {
    setIntent(nextIntent);
    setIsOpen(true);
    setOtpRequested(false);
  }

  function closeModal() {
    setIsOpen(false);
    setPhone('');
    setOtpRequested(false);
  }

  function requestOtp() {
    if (!normalizedPhone) {
      return;
    }

    setOtpRequested(true);
  }

  return (
    <>
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => openModal('enquiry')}
          className="h-11 rounded border border-rose-400 bg-white text-sm font-bold text-rose-500 transition hover:bg-rose-50"
        >
          Send Enquiry
        </button>
        <button
          type="button"
          onClick={() => openModal('contact')}
          className="h-11 rounded bg-rose-500 text-sm font-bold text-white transition hover:bg-rose-600"
        >
          View contact
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-rose-500">
                  {intent === 'enquiry' ? 'Send enquiry' : 'View contact'}
                </p>
                <h2 className="mt-2 text-2xl font-black text-gray-950">{vendorName}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Enter your Sri Lankan mobile number to receive an OTP.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gray-200 text-xl leading-none text-gray-500 hover:bg-gray-50"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <label className="mt-6 block text-sm font-bold text-gray-800" htmlFor="customer-phone">
              Mobile number
            </label>
            <input
              id="customer-phone"
              type="tel"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                setOtpRequested(false);
              }}
              placeholder="07X XXX XXXX or +94 7X XXX XXXX"
              className="mt-2 h-12 w-full rounded-lg border border-gray-300 px-4 text-sm font-medium outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
            />
            {showError && (
              <p className="mt-2 text-xs font-semibold text-rose-600">
                Enter a valid Sri Lankan mobile number, for example 0771234567 or +94771234567.
              </p>
            )}

            {otpRequested && normalizedPhone && (
              <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
                OTP request ready for {normalizedPhone}. Demo mode: no SMS is sent yet.
                {intent === 'contact' && (
                  <p className="mt-2 text-gray-700">Vendor contact: {vendorPhone}</p>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={requestOtp}
              disabled={!normalizedPhone}
              className="mt-6 h-12 w-full rounded bg-rose-500 text-sm font-black text-white transition hover:bg-rose-600 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              Get OTP
            </button>
          </div>
        </div>
      )}
    </>
  );
}
