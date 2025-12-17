const capitalizeWords=(sentences)=>{
    const words =sentences.trim().split(/\s+/);
    return (words.map((w)=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase())).join(' ');
}