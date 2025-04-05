import React from 'react';

const AccordCollection = () => {
  // Add state for search and filters if needed
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // Handle filter button clicks
  const handleFilterClick = (filter) => {
    console.log(`Filter clicked: ${filter}`);
    // Implement filter logic here
  };
  
  // Handle accord card clicks
  const handleAccordClick = (accordName) => {
    console.log(`Accord clicked: ${accordName}`);
    // Implement accord detail view logic here
  };
  
  return (
    <div className="bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Accord Collection</h1>
            <p className="text-sm text-gray-600 mt-1">Your personal flavor library</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">4 of 28 Accords</span>
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-sm mb-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Filter by:</span>
            <button 
              className="px-3 py-1.5 bg-indigo-100 hover:bg-indigo-200 rounded-md text-sm font-medium text-indigo-700"
              onClick={() => handleFilterClick('all')}
              aria-label="Filter all accords"
            >
              All Accords
            </button>
            <button 
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium text-gray-700"
              onClick={() => handleFilterClick('limited')}
              aria-label="Filter limited edition accords"
            >
              Limited Edition
            </button>
            <button 
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium text-gray-700"
              onClick={() => handleFilterClick('creations')}
              aria-label="Filter my creations"
            >
              My Creations
            </button>
            <button 
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium text-gray-700"
              onClick={() => handleFilterClick('recent')}
              aria-label="Filter recently used accords"
            >
              Recently Used
            </button>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search your collection" 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label="Search accords"
            />
            <svg 
              className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* English Herbal Accord */}
          <div 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            onClick={() => handleAccordClick('English Herbal Accord')}
            role="button"
            tabIndex={0}
            aria-label="View English Herbal Accord details"
          >
            <div className="bg-emerald-700 p-4 text-white">
              <h2 className="text-xl font-bold tracking-wider">English Herbal Accord</h2>
              <p className="text-emerald-100 text-sm">A verdant composition with woody undertones</p>
            </div>
            
            <div className="p-4">
              <div className="flex justify-center items-center mb-4">
                <div className="flex">
                  <div className="relative flex flex-col">
                    <div className="h-10 px-3 bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center shadow-sm">
                      <span className="font-medium text-emerald-800 text-sm">Thyme</span>
                    </div>
                    <span className="mt-1 text-xs text-center text-gray-600">top</span>
                    <div className="absolute right-0 top-4 w-3 h-2 bg-emerald-500 z-10"></div>
                  </div>
                  
                  <div className="relative flex flex-col ml-2">
                    <div className="h-10 px-3 bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center shadow-sm">
                      <span className="font-medium text-emerald-700 text-sm">Bay</span>
                    </div>
                    <span className="mt-1 text-xs text-center text-gray-600">heart</span>
                    <div className="absolute left-0 top-4 w-3 h-2 bg-emerald-500 -ml-3 z-10"></div>
                    <div className="absolute right-0 top-4 w-3 h-2 bg-emerald-500 z-10"></div>
                  </div>
                  
                  <div className="relative flex flex-col ml-2">
                    <div className="h-10 px-3 bg-emerald-50 border-2 border-emerald-600 flex items-center justify-center shadow-sm">
                      <span className="font-medium text-emerald-800 text-sm">Sage</span>
                    </div>
                    <span className="mt-1 text-xs text-center text-gray-600">base</span>
                    <div className="absolute left-0 top-4 w-3 h-2 bg-emerald-600 -ml-3 z-10"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <svg 
                    className="w-4 h-4 mr-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Used 12 times</span>
                </div>
                <button 
                  className="text-emerald-700 hover:text-emerald-800 text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAccordClick('English Herbal Accord');
                  }}
                  aria-label="View English Herbal Accord details"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* Nordic Citrus Spice Accord */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="bg-amber-600 p-4 text-white">
              <h2 className="text-xl font-bold tracking-wider">Nordic Citrus Spice Accord</h2>
              <p className="text-amber-50 text-sm">A bright, aromatic composition with warming depth</p>
            </div>
            
            <div className="p-4">
              <div className="flex justify-center items-center mb-4">
                <div className="flex">
                  <div className="relative flex flex-col">
                    <div className="h-10 px-3 bg-amber-100 border-2 border-amber-400 flex items-center justify-center shadow-sm">
                      <span className="font-medium text-amber-800 text-sm">Orange</span>
                    </div>
                    <span className="mt-1 text-xs text-center text-gray-600">top</span>
                    <div className="absolute right-0 top-4 w-3 h-2 bg-amber-400 z-10"></div>
                  </div>
                  
                  <div className="relative flex flex-col ml-2">
                    <div className="h-10 px-3 bg-amber-50 border-2 border-amber-500 flex items-center justify-center shadow-sm">
                      <span className="font-medium text-amber-700 text-sm">Coriander</span>
                    </div>
                    <span className="mt-1 text-xs text-center text-gray-600">heart</span>
                    <div className="absolute left-0 top-4 w-3 h-2 bg-amber-500 -ml-3 z-10"></div>
                    <div className="absolute right-0 top-4 w-3 h-2 bg-amber-500 z-10"></div>
                  </div>
                  
                  <div className="relative flex flex-col ml-2">
                    <div className="h-10 px-3 bg-amber-50 border-2 border-amber-600 flex items-center justify-center shadow-sm">
                      <span className="font-medium text-amber-800 text-sm">Caraway</span>
                    </div>
                    <span className="mt-1 text-xs text-center text-gray-600">base</span>
                    <div className="absolute left-0 top-4 w-3 h-2 bg-amber-600 -ml-3 z-10"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Used 3 times</span>
                </div>
                <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* Forager's Holiday Accord */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
            {/* Limited Edition Ribbon */}
            <div className="absolute -right-12 top-7 w-40 transform rotate-45 bg-gradient-to-r from-red-600 to-green-700 text-center py-1 text-xs font-bold text-white shadow-md">
              LIMITED EDITION
            </div>
            
            <div className="bg-gradient-to-r from-red-700 to-green-800 p-4 text-white">
              <h2 className="text-xl font-bold tracking-wider">Forager's Holiday Accord</h2>
              <p className="text-gray-100 text-sm">A festive composition of woodland treasures</p>
            </div>
            
            <div className="p-4">
              <div className="flex justify-center items-center mb-4">
                <div className="flex">
                  <div className="relative flex flex-col">
                    <div className="h-10 px-3 bg-red-100 border-2 border-red-500 flex items-center justify-center shadow-sm">
                      <span className="font-medium text-red-800 text-sm">Cranberry</span>
                    </div>
                    <span className="mt-1 text-xs text-center text-gray-600">top</span>
                    <div className="absolute right-0 top-4 w-3 h-2 bg-red-500 z-10"></div>
                  </div>
                  
                  <div className="relative flex flex-col ml-2">
                    <div className="h-10 px-3 bg-green-50 border-2 border-green-600 flex items-center justify-center shadow-sm">
                      <span className="font-medium text-green-800 text-sm">Thyme</span>
                    </div>
                    <span className="mt-1 text-xs text-center text-gray-600">heart</span>
                    <div className="absolute left-0 top-4 w-3 h-2 bg-green-600 -ml-3 z-10"></div>
                    <div className="absolute right-0 top-4 w-3 h-2 bg-green-600 z-10"></div>
                  </div>
                  
                  <div className="relative flex flex-col ml-2">
                    <div className="h-10 px-3 bg-amber-50 border-2 border-amber-700 flex items-center justify-center shadow-sm">
                      <span className="font-medium text-amber-800 text-sm">Spicebush</span>
                    </div>
                    <span className="mt-1 text-xs text-center text-gray-600">base</span>
                    <div className="absolute left-0 top-4 w-3 h-2 bg-amber-700 -ml-3 z-10"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Used 7 times</span>
                </div>
                <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* User Original Accord */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
            {/* User Original Badge */}
            <div className="absolute -right-12 top-7 w-40 transform rotate-45 bg-gradient-to-r from-indigo-500 to-purple-600 text-center py-1 text-xs font-bold text-white shadow-md">
              USER ORIGINAL
            </div>
            
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold tracking-wider">Coastal Summer Accord</h2>
                  <p className="text-indigo-100 text-sm">A bright, oceanic profile with herbal depth</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-full p-1">
                  <img src="/api/placeholder/32/32" alt="Creator avatar" className="w-8 h-8 rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-center items-center mb-4">
                <div className="flex">
                  <div className="relative flex flex-col">
                    <div className="h-10 px-3 bg-blue-100 border-2 border-blue-400 flex items-center justify-center shadow-sm">
                      <span className="font-medium text-blue-800 text-sm">Lemon</span>
                    </div>
                    <span className="mt-1 text-xs text-center text-gray-600">top</span>
                    <div className="absolute right-0 top-4 w-3 h-2 bg-blue-400 z-10"></div>
                  </div>
                  
                  <div className="relative flex flex-col ml-2">
                    <div className="h-10 px-3 bg-blue-50 border-2 border-blue-500 flex items-center justify-center shadow-sm">
                      <span className="font-medium text-blue-700 text-sm">Basil</span>
                    </div>
                    <span className="mt-1 text-xs text-center text-gray-600">heart</span>
                    <div className="absolute left-0 top-4 w-3 h-2 bg-blue-500 -ml-3 z-10"></div>
                    <div className="absolute right-0 top-4 w-3 h-2 bg-blue-500 z-10"></div>
                  </div>
                  
                  <div className="relative flex flex-col ml-2">
                    <div className="h-10 px-3 bg-blue-50 border-2 border-blue-600 flex items-center justify-center shadow-sm">
                      <span className="font-medium text-blue-800 text-sm">Sea Salt</span>
                    </div>
                    <span className="mt-1 text-xs text-center text-gray-600">base</span>
                    <div className="absolute left-0 top-4 w-3 h-2 bg-blue-600 -ml-3 z-10"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Used 2 times</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>23</span>
                  </div>
                </div>
                
                <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Creator Dashboard Section */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">My Accord Creations</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">1 created</span>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
                Create New Accord
              </button>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-indigo-900 mb-2">Creator Challenges</h3>
                <p className="text-sm text-gray-700 mb-4">Create and share your original flavor accords to earn community recognition and unlock exclusive features.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Create your first accord</p>
                      <div className="w-36 h-1.5 bg-indigo-100 rounded-full mt-1">
                        <div className="w-full h-full bg-indigo-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-500">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Get 5 likes on your accords</p>
                      <div className="w-36 h-1.5 bg-gray-100 rounded-full mt-1">
                        <div className="w-1/2 h-full bg-indigo-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-500">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Create 3 original accords</p>
                      <div className="w-36 h-1.5 bg-gray-100 rounded-full mt-1">
                        <div className="w-1/3 h-full bg-indigo-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <div className="text-center mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">This Week's Challenge</span>
                </div>
                <div className="p-2 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-md border border-amber-100 mb-2">
                  <p className="text-sm font-medium text-amber-800">Citrus & Spice</p>
                  <p className="text-xs text-gray-600">Create an accord using citrus and warm spices</p>
                </div>
                <div className="flex justify-center">
                  <button className="text-xs text-indigo-600 font-medium">Accept Challenge</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Community Showcase */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Community Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-3 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Trending Accords</h3>
                  <button className="text-xs text-white bg-white bg-opacity-20 px-2 py-1 rounded-full">View All</button>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                      <span className="text-rose-700 font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Spring Berries Accord</p>
                      <p className="text-xs text-gray-500">by Chef Maria</p>
                    </div>
                    <div className="ml-auto flex items-center text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      <span className="text-xs">156</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center">
                      <span className="text-rose-600 font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Umami Bomb Accord</p>
                      <p className="text-xs text-gray-500">by Chef Jackson</p>
                    </div>
                    <div className="ml-auto flex items-center text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      <span className="text-xs">142</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center">
                      <span className="text-rose-500 font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Smoky Nightcap Accord</p>
                      <p className="text-xs text-gray-500">by Chef Aisha</p>
                    </div>
                    <div className="ml-auto flex items-center text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      <span className="text-xs">119</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordCollection;
