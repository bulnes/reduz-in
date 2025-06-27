"use server";

export const submitUrl = async (url: string): Promise<string> => {
  // Simulate an API call to shorten the URL
  // In a real application, you would replace this with an actual API request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`https://reduzin.in/${btoa(url).substring(0, 8)}`);
    }, 5000);
  });
}
