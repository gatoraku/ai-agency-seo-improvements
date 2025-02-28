export default function ServiceCard({ title, description, items }) {
  // Convert title to slug for use in ID (for accessibility and SEO)
  const titleSlug = title ? title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') : '';
  
  return (
    <div 
      className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
      id={`service-${titleSlug}`}
    >
      {/* h3 is already good for SEO hierarchy */}
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3" aria-label={`${title} features`}>
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <span className="mr-2 text-blue-400" aria-hidden="true">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}