// make ur own dont skid, if u need src dm @decal. on discord ill hook u up
async function updateViewCounter() {
    try {
      let _0x1d6caf = await fetch("https://amruu.bio/counter.php");
      if (!_0x1d6caf.ok) {
        throw new Error("Failed to fetch view count");
      }
      let _0x2c4d32 = await _0x1d6caf.json();
      let _0x2aa3c7 = _0x2c4d32.views || 0;
      _0x2aa3c7 += 1;
      document.getElementById("view-count").textContent = _0x2aa3c7;
    } catch (_0x26b6ef) {
      console.error("Error updating view counter:", _0x26b6ef);
      document.getElementById("view-count").textContent = "Error!";
    }
  }
  updateViewCounter();