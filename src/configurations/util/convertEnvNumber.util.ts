export const convertEnvNumber = (envNumber: string): number | undefined => {
  if (envNumber === undefined) {
    return undefined;
  }

  const parsedNumber = Number(envNumber);

  if (isNaN(parsedNumber)) {
    throw new Error(`Invalid number: ${envNumber}`);
  }

  return parsedNumber;
};
