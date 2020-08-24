export function camelCaseToHumanReadable(str){
  
  let humanReadable = str.charAt(0).toUpperCase() + str.slice(1);

  return humanReadable.replace(/([A-Z]+)/g, ' $1').replace(/^ /, '');
};