'use client';

import React, { useState } from 'react';

type MenuKey = 'budget' | 'services' | 'ratings' | 'filters' | null;

const budgetOptions = ['Under LKR 25,000', 'LKR 25,000 - 50,000', 'LKR 50,000 - 100,000', 'Above LKR 100,000'];
const serviceOptions = ['Photo & Video', 'Pre-wedding shoot', 'Album design', 'Drone coverage', 'Traditional coverage'];
const ratingOptions = ['5.0 only', '4.8 and above', '4.5 and above', 'Any rating'];

function FilterButton({
  label,
  active,
  open,
  onClick,
}: {
  label: string;
  active?: boolean;
  open?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-5 py-2.5 text-sm font-semibold shadow-sm transition ${
        active || open
          ? 'border-rose-400 bg-rose-50 text-rose-600'
          : 'border-gray-200 bg-white text-gray-700 hover:border-rose-300 hover:text-rose-600'
      }`}
    >
      {label}
      <span className="ml-2 text-xs text-gray-400">v</span>
    </button>
  );
}

function OptionMenu({
  title,
  options,
  selected,
  onSelect,
}: {
  title: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="absolute left-0 top-full z-40 mt-3 w-72 rounded-xl border border-gray-200 bg-white p-3 shadow-xl">
      <p className="px-2 pb-2 text-xs font-black uppercase tracking-wide text-gray-500">{title}</p>
      <div className="space-y-1">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition ${
              selected === option ? 'bg-rose-50 text-rose-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {option}
            {selected === option && <span>&#10003;</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function VendorListingFilters() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [budget, setBudget] = useState('');
  const [service, setService] = useState('');
  const [rating, setRating] = useState('');
  const [shortlisted, setShortlisted] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [quickReply, setQuickReply] = useState(false);

  const activeCount = [budget, service, rating, shortlisted, verifiedOnly, quickReply].filter(Boolean).length;

  function clearFilters() {
    setBudget('');
    setService('');
    setRating('');
    setShortlisted(false);
    setVerifiedOnly(false);
    setQuickReply(false);
    setOpenMenu(null);
  }

  return (
    <div>
      <div className="relative flex flex-wrap items-center gap-3">
        <div className="relative">
          <FilterButton
            label={budget || 'Budget'}
            active={Boolean(budget)}
            open={openMenu === 'budget'}
            onClick={() => setOpenMenu(openMenu === 'budget' ? null : 'budget')}
          />
          {openMenu === 'budget' && (
            <OptionMenu title="Select budget" options={budgetOptions} selected={budget} onSelect={(value) => {
              setBudget(value);
              setOpenMenu(null);
            }} />
          )}
        </div>

        <div className="relative">
          <FilterButton
            label={service || 'Services'}
            active={Boolean(service)}
            open={openMenu === 'services'}
            onClick={() => setOpenMenu(openMenu === 'services' ? null : 'services')}
          />
          {openMenu === 'services' && (
            <OptionMenu title="Select service" options={serviceOptions} selected={service} onSelect={(value) => {
              setService(value);
              setOpenMenu(null);
            }} />
          )}
        </div>

        <div className="relative">
          <FilterButton
            label={rating || 'Ratings'}
            active={Boolean(rating)}
            open={openMenu === 'ratings'}
            onClick={() => setOpenMenu(openMenu === 'ratings' ? null : 'ratings')}
          />
          {openMenu === 'ratings' && (
            <OptionMenu title="Select rating" options={ratingOptions} selected={rating} onSelect={(value) => {
              setRating(value);
              setOpenMenu(null);
            }} />
          )}
        </div>

        <button
          type="button"
          onClick={() => setShortlisted(!shortlisted)}
          className={`rounded-full border px-5 py-2.5 text-sm font-semibold shadow-sm transition ${
            shortlisted
              ? 'border-rose-400 bg-rose-50 text-rose-600'
              : 'border-gray-200 bg-white text-gray-700 hover:border-rose-300 hover:text-rose-600'
          }`}
        >
          Shortlisted
        </button>

        <div className="relative ml-auto">
          <button
            type="button"
            onClick={() => setOpenMenu(openMenu === 'filters' ? null : 'filters')}
            className={`rounded border px-4 py-2.5 text-sm font-semibold shadow-sm transition ${
              openMenu === 'filters' || activeCount > 0
                ? 'border-rose-400 bg-rose-50 text-rose-600'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'
            }`}
          >
            Filters {activeCount > 0 && <span className="ml-1">({activeCount})</span>}
          </button>

          {openMenu === 'filters' && (
            <div className="absolute right-0 top-full z-40 mt-3 w-80 rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-gray-950">More filters</h3>
                <button type="button" onClick={clearFilters} className="text-xs font-bold text-rose-500">Clear all</button>
              </div>

              <div className="mt-4 space-y-3">
                <label className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <input type="checkbox" checked={verifiedOnly} onChange={(event) => setVerifiedOnly(event.target.checked)} className="h-4 w-4 accent-rose-500" />
                  Verified vendors only
                </label>
                <label className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <input type="checkbox" checked={quickReply} onChange={(event) => setQuickReply(event.target.checked)} className="h-4 w-4 accent-rose-500" />
                  Quick reply vendors
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {activeCount > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-600">
          <span>Active filters:</span>
          {[budget, service, rating, shortlisted ? 'Shortlisted' : '', verifiedOnly ? 'Verified' : '', quickReply ? 'Quick reply' : '']
            .filter(Boolean)
            .map((filter) => (
              <span key={filter} className="rounded-full bg-rose-50 px-3 py-1 text-rose-600">{filter}</span>
            ))}
        </div>
      )}
    </div>
  );
}
