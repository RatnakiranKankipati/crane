import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

export function SEOHead({ 
  title = "EOT Crane Design Automation | FDES Technologies | Engineering Software Solutions",
  description = "Transform your EOT crane manufacturing with FDES Technologies' design automation software. Reduce design time from days to hours with AutoCAD & 3D modeling integration.",
  keywords = "EOT crane design automation, crane manufacturing software, engineering automation, AutoCAD integration, 3D modeling, IS standards compliance, manufacturing efficiency",
  ogTitle,
  ogDescription,
  ogUrl = "https://eotcranedesigner.com"
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Set meta description
    let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.name = 'description';
      document.head.appendChild(descMeta);
    }
    descMeta.content = description;
    
    // Set meta keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.content = keywords;
    
    // Set author
    let authorMeta = document.querySelector('meta[name="author"]') as HTMLMetaElement;
    if (!authorMeta) {
      authorMeta = document.createElement('meta');
      authorMeta.name = 'author';
      document.head.appendChild(authorMeta);
    }
    authorMeta.content = "FDES Technologies Private Limited";
    
    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: ogTitle || title },
      { property: 'og:description', content: ogDescription || description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: ogUrl }
    ];
    
    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });
    
    // Add structured data
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FDES Technologies Private Limited",
      "url": ogUrl,
      "description": "Specialized engineering design automation for EOT crane manufacturers",
      "serviceType": "Engineering Software Solutions",
      "areaServed": "Global"
    });
  }, [title, description, keywords, ogTitle, ogDescription, ogUrl]);
  
  return null;
}
