async function fetchSvgImage() {
    try {
      const response = await fetch('/.netlify/functions/getRpc');
      const data = await response.json();

      if (data.base64SVG) {
        document.getElementById('rpc').src = data.base64SVG;
      } else {
        console.error('Failed to retrieve Base64 SVG data');
      }
    } catch (error) {
      console.error('Error fetching SVG image:', error);
    }
  }

  fetchSvgImage();