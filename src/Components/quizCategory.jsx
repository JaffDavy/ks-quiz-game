import React from "react";

export function QuizCategories({ categories, onCategorySelect }) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-white mb-6">Choose a Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategorySelect(cat.id)}
            className={`${cat.color} hover:brightness-110 relative overflow-hidden group text-white font-bold py-4 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95`}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
