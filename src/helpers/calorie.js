const calorie = ({
  weight, height, age, gender, activity_level, target
}) => {
  let total = gender === 'male'
    ? 66.5 + 13.75 * +weight + 5.003 * +height - 6.75 * +age
    : 655 + 9.563 * +weight + 1.85 * +height - 4.676 * +age;

  total = +activity_level === 1 ? total * 1.2
    : +activity_level === 2 ? total * 1.375
      : +activity_level === 3 ? total * 1.55
        : +activity_level === 4 ? total * 1.725
          : total * 1.9;
  
  return target === 'slim' ? total * 0.9
    : target === 'maintain' ? total
    : total * 1.1;
}

export { calorie }