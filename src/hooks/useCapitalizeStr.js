export default function useCapitalizeStr() {
  const capitalizeStr = (str, split = " ", join = " ") => {
    const arr = str.split(split);
    const capitalizedArr = arr.map((subStr) => {
      return subStr.replace(subStr[0], subStr[0].toUpperCase());
    });
    const capitalizedStr = capitalizedArr.join(join);
    return capitalizedStr;
  };

  return { capitalizeStr };
}
