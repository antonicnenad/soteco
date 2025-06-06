export interface TranslationKeys {
  // Navigation
  nav: {
    home: string;
    about: string;
    solutions: string;
    references: string;
    news: string;
    contact: string;
  };
  
  // Home page
  home: {
    hero: {
      title: string;
      subtitle: string;
      viewSolutions: string;
      contactUs: string;
    };
    stats: {
      yearsExperience: string;
      completedProjects: string;
      satisfiedClients: string;
      exportCountries: string;
    };
    solutions: {
      title: string;
      subtitle: string;
      food: {
        title: string;
        description: string;
        learnMore: string;
      };
      pharmaceutical: {
        title: string;
        description: string;
        learnMore: string;
      };
      packaging: {
        title: string;
        description: string;
        learnMore: string;
      };
    };
  };

  // About page
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    meetTeam: string;
    team: {
      title: string;
      subtitle: string;
    };
  };

  // Contact page
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    workingHours: string;
    mondayFriday: string;
    saturday: string;
    sunday: string;
    sendMessage: string;
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    subject: string;
    message: string;
    privacyPolicy: string;
    sendButton: string;
    selectSubject: string;
    generalInquiry: string;
    quoteRequest: string;
    technicalSupport: string;
    partnership: string;
  };

  // Documents
  documents: {
    title: string;
    subtitle: string;
    download: string;
    productCatalog: string;
    technicalManuals: string;
    qualityCertificates: string;
    catalogDescription: string;
    manualsDescription: string;
    certificatesDescription: string;
  };

  // News
  news: {
    title: string;
    allNews: string;
    readMore: string;
  };

  // Testimonials
  testimonials: {
    title: string;
  };

  // References
  references: {
    title: string;
    subtitle: string;
  };

  // CTA
  cta: {
    title: string;
    subtitle: string;
    requestQuote: string;
    callUs: string;
  };

  // Footer
  footer: {
    quickLinks: string;
    contactInfo: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsOfUse: string;
  };

  // Common
  common: {
    search: string;
    searchSite: string;
    enterSearchTerm: string;
    loading: string;
    error: string;
    tryAgain: string;
    close: string;
  };
}

export const translations: Record<'sr' | 'en', TranslationKeys> = {
  sr: {
    nav: {
      home: 'Početna',
      about: 'O nama',
      solutions: 'Rešenja',
      references: 'Reference',
      news: 'Vesti',
      contact: 'Kontakt',
    },
    home: {
      hero: {
        title: 'Industrijska Rešenja za Hranu, Farmaciju i Pakovanje',
        subtitle: 'SOTECO je lider u projektovanju i implementaciji naprednih tehnoloških sistema za prehrambenu, farmaceutsku i ambalažnu industriju. Više od 25 godina iskustva u pružanju inovativnih rešenja.',
        viewSolutions: 'Pogledajte Rešenja',
        contactUs: 'Kontaktirajte Nas',
      },
      stats: {
        yearsExperience: 'Godina Iskustva',
        completedProjects: 'Realizovanih Projekata',
        satisfiedClients: 'Zadovoljnih Klijenata',
        exportCountries: 'Zemalja Izvoza',
      },
      solutions: {
        title: 'Naša Rešenja',
        subtitle: 'Specijalizovani smo za projektovanje i implementaciju naprednih tehnoloških sistema za različite industrije',
        food: {
          title: 'Prehrambena Industrija',
          description: 'Kompleksna rešenja za prehrambenu industriju uključujući sisteme za pakovanje, procesiranje i kontrolu kvaliteta.',
          learnMore: 'Saznajte više',
        },
        pharmaceutical: {
          title: 'Farmaceutska Industrija',
          description: 'Visokotehnološka rešenja za farmaceutsku industriju sa fokusom na preciznost i stroge standarde kvaliteta.',
          learnMore: 'Saznajte više',
        },
        packaging: {
          title: 'Ambalaža i Pakovanje',
          description: 'Inovativni sistemi za pakovanje koji povećavaju efikasnost i smanjuju troškove proizvodnje.',
          learnMore: 'Saznajte više',
        },
      },
    },
    about: {
      title: 'O SOTECO-u',
      subtitle: 'Naša misija je da kroz kontinuirani razvoj i unapređenje kvaliteta proizvoda i usluga postanemo lider u oblasti tehnoloških sistema u regionu.',
      description1: 'SOTECO D.O.O. je kompanija sa preko 25 godina iskustva u projektovanju i implementaciji naprednih tehnoloških sistema. Osnovan 1997. godine, SOTECO je stekao reputaciju pouzdanog partnera u industriji.',
      description2: 'Naša misija je da kroz kontinuirani razvoj i unapređenje kvaliteta proizvoda i usluga postanemo lider u oblasti tehnoloških sistema u regionu.',
      meetTeam: 'Upoznajte Naš Tim',
      team: {
        title: 'Naš Tim',
        subtitle: 'Naš tim čine visoko kvalifikovani stručnjaci sa dugogodišnjim iskustvom u industriji',
      },
    },
    contact: {
      title: 'Kontaktirajte Nas',
      subtitle: 'Naš tim je spreman da odgovori na sva vaša pitanja i pruži potrebne informacije',
      address: 'Adresa',
      phone: 'Kontakt',
      workingHours: 'Radno Vreme',
      mondayFriday: 'Ponedeljak - Petak: 08:00 - 16:00',
      saturday: 'Subota: 08:00 - 13:00',
      sunday: 'Nedelja: Zatvoreno',
      sendMessage: 'Pošaljite Poruku',
      firstName: 'Ime',
      lastName: 'Prezime',
      email: 'Email Adresa',
      company: 'Kompanija',
      subject: 'Tema',
      message: 'Poruka',
      privacyPolicy: 'Slažem se sa politikom privatnosti',
      sendButton: 'Pošaljite Poruku',
      selectSubject: 'Izaberite temu...',
      generalInquiry: 'Opšte pitanje',
      quoteRequest: 'Zahtev za ponudu',
      technicalSupport: 'Tehnička podrška',
      partnership: 'Partnerstvo',
    },
    documents: {
      title: 'Dokumentacija i Specifikacije',
      subtitle: 'Preuzmite detaljne specifikacije naših mašina i tehnička uputstva',
      download: 'Preuzmite',
      productCatalog: 'Katalog Proizvoda 2024',
      technicalManuals: 'Tehnička Uputstva',
      qualityCertificates: 'Sertifikati Kvaliteta',
      catalogDescription: 'Kompletan pregled svih naših proizvoda sa tehničkim specifikacijama',
      manualsDescription: 'Detaljni priručnici za instalaciju i održavanje opreme',
      certificatesDescription: 'ISO sertifikati i dokumentacija o standardima kvaliteta',
    },
    news: {
      title: 'Poslednje Vesti',
      allNews: 'Sve vesti',
      readMore: 'Pročitajte više',
    },
    testimonials: {
      title: 'Šta Kažu Naši Klijenti',
    },
    references: {
      title: 'Naše Reference',
      subtitle: 'Ponosni smo na uspešnu saradnju sa vodećim kompanijama u regionu',
    },
    cta: {
      title: 'Spremni za Saradnju?',
      subtitle: 'Kontaktirajte nas danas i saznajte kako SOTECO može da vam pomogne u realizaciji vašeg projekta',
      requestQuote: 'Zatražite Ponudu',
      callUs: 'Pozovite Nas',
    },
    footer: {
      quickLinks: 'Brzi Linkovi',
      contactInfo: 'Kontakt Informacije',
      allRightsReserved: 'Sva prava zadržana.',
      privacyPolicy: 'Politika Privatnosti',
      termsOfUse: 'Uslovi Korišćenja',
    },
    common: {
      search: 'Pretraži',
      searchSite: 'Pretraži Sajt',
      enterSearchTerm: 'Unesite pojam za pretragu...',
      loading: 'Učitava...',
      error: 'Greška',
      tryAgain: 'Pokušajte ponovo',
      close: 'Zatvori',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      solutions: 'Solutions',
      references: 'References',
      news: 'News',
      contact: 'Contact',
    },
    home: {
      hero: {
        title: 'Industrial Solutions for Food, Pharmaceutical and Packaging',
        subtitle: 'SOTECO is a leader in designing and implementing advanced technological systems for food, pharmaceutical and packaging industries. More than 25 years of experience in providing innovative solutions.',
        viewSolutions: 'View Solutions',
        contactUs: 'Contact Us',
      },
      stats: {
        yearsExperience: 'Years Experience',
        completedProjects: 'Completed Projects',
        satisfiedClients: 'Satisfied Clients',
        exportCountries: 'Export Countries',
      },
      solutions: {
        title: 'Our Solutions',
        subtitle: 'We specialize in designing and implementing advanced technological systems for various industries',
        food: {
          title: 'Food Industry',
          description: 'Comprehensive solutions for food industry including packaging systems, processing and quality control.',
          learnMore: 'Learn more',
        },
        pharmaceutical: {
          title: 'Pharmaceutical Industry',
          description: 'High-tech solutions for pharmaceutical industry focusing on precision and strict quality standards.',
          learnMore: 'Learn more',
        },
        packaging: {
          title: 'Packaging Solutions',
          description: 'Innovative packaging systems that increase efficiency and reduce production costs.',
          learnMore: 'Learn more',
        },
      },
    },
    about: {
      title: 'About SOTECO',
      subtitle: 'Our mission is to become a leader in the field of technological systems in the region through continuous development and improvement of product and service quality.',
      description1: 'SOTECO D.O.O. is a company with more than 25 years of experience in designing and implementing advanced technological systems. Founded in 1997, SOTECO has gained a reputation as a reliable partner in the industry.',
      description2: 'Our mission is to become a leader in the field of technological systems in the region through continuous development and improvement of product and service quality.',
      meetTeam: 'Meet Our Team',
      team: {
        title: 'Our Team',
        subtitle: 'Our team consists of highly qualified professionals with many years of industry experience',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Our team is ready to answer all your questions and provide necessary information',
      address: 'Address',
      phone: 'Contact',
      workingHours: 'Working Hours',
      mondayFriday: 'Monday - Friday: 08:00 - 16:00',
      saturday: 'Saturday: 08:00 - 13:00',
      sunday: 'Sunday: Closed',
      sendMessage: 'Send Message',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      company: 'Company',
      subject: 'Subject',
      message: 'Message',
      privacyPolicy: 'I agree with privacy policy',
      sendButton: 'Send Message',
      selectSubject: 'Select subject...',
      generalInquiry: 'General inquiry',
      quoteRequest: 'Quote request',
      technicalSupport: 'Technical support',
      partnership: 'Partnership',
    },
    documents: {
      title: 'Documentation & Specifications',
      subtitle: 'Download detailed specifications of our machines and technical manuals',
      download: 'Download',
      productCatalog: 'Product Catalog 2024',
      technicalManuals: 'Technical Manuals',
      qualityCertificates: 'Quality Certificates',
      catalogDescription: 'Complete overview of all our products with technical specifications',
      manualsDescription: 'Detailed manuals for equipment installation and maintenance',
      certificatesDescription: 'ISO certificates and quality standards documentation',
    },
    news: {
      title: 'Latest News',
      allNews: 'All news',
      readMore: 'Read more',
    },
    testimonials: {
      title: 'What Our Clients Say',
    },
    references: {
      title: 'Our References',
      subtitle: 'We are proud of successful cooperation with leading companies in the region',
    },
    cta: {
      title: 'Ready for Cooperation?',
      subtitle: 'Contact us today and find out how SOTECO can help you realize your project',
      requestQuote: 'Request Quote',
      callUs: 'Call Us',
    },
    footer: {
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Information',
      allRightsReserved: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
    },
    common: {
      search: 'Search',
      searchSite: 'Search Site',
      enterSearchTerm: 'Enter search term...',
      loading: 'Loading...',
      error: 'Error',
      tryAgain: 'Try again',
      close: 'Close',
    },
  },
};
