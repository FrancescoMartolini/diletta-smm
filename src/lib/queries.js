export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;
export const servicesQuery = `*[_type == "service"] | order(order asc)`;
export const portfolioQuery = `*[_type == "portfolioItem"] | order(order asc)`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc)`;
