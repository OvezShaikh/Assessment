import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import './style.css'; // Import CSS file for custom styling
import icons from '../constants/icons';

const AutocompleteSearch = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Mock data for suggestions
  const products = [
    { id: 1, name: 'SEO Optimization Tool', category: 'Marketing' },
    { id: 2, name: 'Email Campaign Manager', category: 'Marketing' },
    { id: 3, name: 'Content Calendar Planner', category: 'Content Creation' },
    { id: 4, name: 'Video Editing Software', category: 'Content Creation' },
    { id: 5, name: 'AI Image Generator', category: 'Image Generation' },
    { id: 6, name: 'Photo Editing Software', category: 'Image Generation' },
    { id: 7, name: 'Social Media Analytics', category: 'Marketing' },
    { id: 8, name: 'Content Idea Generator', category: 'Content Creation' },
    { id: 9, name: 'Graphic Design Tool', category: 'Image Generation' },
    { id: 10, name: 'Blog Post Scheduler', category: 'Content Creation' },
  ];

  // Get suggestions based on user input
  const getSuggestions = (inputValue) => {
    const inputWords = inputValue.trim().toLowerCase().split(/\s+/); // Split input value into words
    return products.filter((product) => {
      const productWords = product.name.toLowerCase().split(/\s+/);
      const productCategoryWords = product.category.toLowerCase().split(/\s+/);

      // Check if any word in the input matches any word in the product name or category
      return inputWords.some((inputWord) =>
        productWords.includes(inputWord) || productCategoryWords.includes(inputWord)
      );
    });
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const getSuggestionValue = (suggestion) => suggestion.name; // Return the product name

  const renderSuggestion = (suggestion) => (
    <div>
      <strong>{suggestion.name}</strong> - {suggestion.category}
    </div>
  );

  const inputProps = {
    placeholder: 'Start your search voyex',
    value,
    onChange
  };

  // Custom theme for styling
  const theme = {
    container: 'autocomplete-container',
    suggestionsContainer: 'suggestions-container',
    suggestion: 'suggestion',
    suggestionHighlighted: 'suggestion-highlighted',
    input: 'autocomplete-input'
  };

  return (
    <div className="autocomplete-wrapper">
      <div className="input-container">
        <img src={icons.searchnormal} alt="Search icon" className="input-icon" />
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          theme={theme} // Apply custom theme for styling
        />
      </div>
    </div>
  );
};

export default AutocompleteSearch;
