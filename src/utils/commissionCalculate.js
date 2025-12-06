export function commissionCalculate(value) {
  if (value < 100) {
    return {
      percentual: 0,
      comissao: 0,
    };
  }

  if (value < 500) {
    return {
      percentual: 1,
      comissao: value * 0.01,
    };
  }

  return {
    percentual: 5,
    comissao: value * 0.05,
  };
}
