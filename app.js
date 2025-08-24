document.getElementById('generateBtn').onclick = async function () {
    const story = document.getElementById('storyInput').value.trim();
    const voice = document.getElementById('voiceTone').value;
    const output = document.getElementById('output');
    output.innerHTML = "⏳ Generating video...";

    // Demo: send request to Python backend (Flask/FastAPI)
    const resp = await fetch('/api/generate', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ story, voice })
    });
    const data = await resp.json();

    if (data && data.video_url) {
        output.innerHTML = `<video src="${data.video_url}" controls style="width:100%;border-radius:10px"></video>
        <a href="${data.video_url}" download="hindi_story_video.mp4"><button>Download MP4</button></a>`;
    } else {
        output.innerHTML = "❌ Failed to generate video. Try again!";
    }
};
