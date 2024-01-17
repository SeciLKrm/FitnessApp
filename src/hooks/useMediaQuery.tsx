// Bu kod, bir medya sorgusu (media query) 
// sonucuna göre eşleşme durumunu takip eden bir özel bir React 
// hook olan useMediaQuery'yi tanımlar. 
// Bu hook, belirli bir medya sorgusunu (CSS medya sorgusu) temsil eden bir dize alır
//  ve bu sorgunun eşleşip eşleşmediğini takip eder.
//  Bu tip özel hook'lar, özellikle kullanıcı arayüzünü farklı ekran boyutlarına 
// veya diğer medya özelliklerine duyarlı hale getirmek istediğinizde kullanışlı olabilir.

import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};


export default useMediaQuery;
