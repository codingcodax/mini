const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
};

export default copyToClipboard;
