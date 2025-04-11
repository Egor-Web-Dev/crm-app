function contactTooltip(type, value) {
  const tooltip = document.createElement("div");
  const tooltipType = document.createElement("span");
  const tooltipValue = document.createElement("a");

  tooltip.classList.add("clients__contact-tooltip", "span-tooltip", "flex");
  tooltipType.classList.add("contact-tooltip__type");
  tooltipValue.classList.add("contact-tooltip__value");

  tooltipType.textContent = `${type}: `;
  tooltipValue.textContent = value;

  tooltip.append(tooltipType, tooltipValue);

  return {
    tooltip,
    tooltipType,
    tooltipValue,
  };
}

export default contactTooltip;
