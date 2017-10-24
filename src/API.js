const API = {};

API.getData = async () => {
  const endpoint = 'https://frontend-exercise.apps.staging.digital.gov.au/bars';
  let bars;
  let buttons;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    bars = data.bars;
    buttons = data.buttons;
  } catch (e) {
    // Set fallback data if fetch fails (Eg. endpoint not available)
    bars = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    buttons = [-10, -20, 30];
  }

  return { bars, buttons };
};

export default API;
