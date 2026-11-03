# Project image guide

The first portfolio version uses designed placeholders so the pages are complete without stock images. When project images are ready, add them to this folder with the names below.

- `methane-detection.jpg` — chamber, field deployment, or well-site sensor photo
- `ai-cfd.jpg` — CFD concentration or flow-field visualization
- `measurement-monitoring.jpg` — monitoring setup, instruments, or time-series figure
- `co2-measurement.jpg` — steam generator or measurement schematic
- `wellfinder.jpg` — map, document-search interface, or historical well record
- `air-quality.jpg` — Kinshasa sensor deployment, map, or air-quality time series
- `cmaq-speciate.jpg` — CMAQ/SPECIATE workflow or a preferred results figure
- `plume-modeling.jpg` — plume model, satellite data, or dispersion visualization

Each project page contains a `visual-placeholder` block near the top. Replace that block with:

```html
<figure class="figure">
  <img src="../assets/images/FILE-NAME.jpg" alt="Describe the project image">
  <figcaption>Write a short factual caption.</figcaption>
</figure>
```

For consistent cards and page heroes, landscape images around 1600 × 1000 pixels work best.
