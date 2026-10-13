# 郭雨桐 · Portfolio

Guo Yutong's portfolio resume, a static site with no build step.

- `index.html`: English (main page)
- `zh/index.html`: Chinese
- `assets/site.css`, `assets/site.js`: shared styles and the video player
- `assets/img/`: images
- `assets/video/`: put video files here

The layout follows the "Portfolio EN" design from Claude Design.

## Adding a video

Each video slot is a `<div class="player" data-video="">`. Fill in `data-video` on both pages:

- A local file: compress it to an H.264 MP4 under 50 MB, put it in `assets/video/`, then use `data-video="assets/video/fytl-ep1.mp4"` (in the Chinese page: `../assets/video/fytl-ep1.mp4`).
- YouTube: use the embed address, for example `data-video="https://www.youtube.com/embed/VIDEO_ID"`.

While a slot is empty, clicking play shows a "coming soon" message.

## Publishing with GitHub Pages

Settings → Pages → Build and deployment → Source: Deploy from a branch → choose this branch and `/ (root)`.

## Previewing locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000/.
