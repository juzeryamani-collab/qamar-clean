export interface Location {
  city: string
  county: string
  distance: string
  slug?: string
}

export const houstonAreaLocations: Location[] = [
  { city: 'Houston',       county: 'Harris',     distance: 'Hub',       slug: 'houston'       },
  { city: 'Sugar Land',    county: 'Fort Bend',  distance: '~20 mi SW', slug: 'sugar-land'    },
  { city: 'Katy',          county: 'Harris',     distance: '~28 mi W',  slug: 'katy'          },
  { city: 'The Woodlands', county: 'Montgomery', distance: '~28 mi N',  slug: 'the-woodlands' },
  { city: 'Pearland',      county: 'Brazoria',   distance: '~17 mi S',  slug: 'pearland'      },
  { city: 'Pasadena',      county: 'Harris',     distance: '~12 mi SE', slug: 'pasadena'      },
  { city: 'Friendswood',   county: 'Galveston',  distance: '~22 mi S'   },
  { city: 'League City',   county: 'Galveston',  distance: '~25 mi SE', slug: 'league-city'   },
  { city: 'Baytown',       county: 'Harris',     distance: '~25 mi E'   },
  { city: 'Conroe',        county: 'Montgomery', distance: '~38 mi N'   },
  { city: 'Missouri City', county: 'Fort Bend',  distance: '~18 mi SW', slug: 'missouri-city' },
  { city: 'Stafford',      county: 'Fort Bend',  distance: '~16 mi SW'  },
  { city: 'Humble',        county: 'Harris',     distance: '~18 mi NE'  },
  { city: 'Spring',        county: 'Harris',     distance: '~22 mi N'   },
  { city: 'Cypress',       county: 'Harris',     distance: '~23 mi NW', slug: 'cypress'       },
  { city: 'Richmond',      county: 'Fort Bend',  distance: '~33 mi SW'  },
  { city: 'Rosenberg',     county: 'Fort Bend',  distance: '~35 mi SW'  },
  { city: 'Webster',       county: 'Harris',     distance: '~22 mi SE'  },
  { city: 'Deer Park',     county: 'Harris',     distance: '~18 mi SE'  },
  { city: 'La Porte',      county: 'Harris',     distance: '~23 mi SE'  },
  { city: 'Seabrook',      county: 'Harris',     distance: '~25 mi SE'  },
  { city: 'Channelview',   county: 'Harris',     distance: '~15 mi E'   },
  { city: 'Galena Park',   county: 'Harris',     distance: '~8 mi E'    },
  { city: 'Alvin',         county: 'Brazoria',   distance: '~30 mi S'   },
  { city: 'Dickinson',     county: 'Galveston',  distance: '~30 mi SE'  },
  { city: 'Santa Fe',      county: 'Galveston',  distance: '~35 mi S'   },
  { city: 'Texas City',    county: 'Galveston',  distance: '~38 mi S'   },
  { city: 'Porter',        county: 'Montgomery', distance: '~28 mi NE'  },
  { city: 'New Caney',     county: 'Montgomery', distance: '~33 mi NE'  },
  { city: 'Crosby',        county: 'Harris',     distance: '~28 mi NE'  },
]
