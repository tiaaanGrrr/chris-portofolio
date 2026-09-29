# Vehicle Detection for Traffic Light Optimization

**Status:** Academic team prototype
**Area:** Computer vision and adaptive traffic control
**Canonical implementation:** [Jozioo/Vehicle-Detecion---MOG](https://github.com/Jozioo/Vehicle-Detecion---MOG)

## Overview

This project explores a computationally lightweight way to estimate traffic density from a fixed CCTV feed and derive a bounded green-light duration. It uses classical computer vision rather than a trained deep-learning model, allowing the pipeline to run on CPU hardware without labeled training data.

The prototype processes each frame through several visible stages so detections and failures can be inspected directly.

## Pipeline

1. **Frame acquisition** — read fixed-camera traffic footage with OpenCV.
2. **Frame-relative ROI masking** — crop the road area using coordinates derived from the input frame dimensions.
3. **MOG2 background subtraction** — separate moving foreground regions from the modeled road background and suppress shadow-classified pixels.
4. **Morphological filtering** — apply opening and closing operations to reduce noise and reconnect fragmented vehicle blobs.
5. **Centroid tracking** — associate detections between nearby frames and maintain simple vehicle identities.
6. **Green-time estimate** — display a bounded duration derived from cumulative detected IDs.

The current timing heuristic is:

```text
T_green = min(60, 15 + 2.5 × N)
```

where `N` is the cumulative ID count used by the prototype.

## My contribution

Chris contributed:

- the overall system architecture;
- Layer 1: frame-relative Region of Interest masking;
- Layer 2: OpenCV MOG2 background-subtraction implementation; and
- presentation design for the project report and demonstration.

Morphological filtering, centroid tracking, evaluation, and timing logic are presented as team-level work rather than individual claims.

## Team and attribution

This was a collaborative Computer Vision project by:

- Christian Leonardo Halim
- Jozio Damaier Gidalti
- Edward Nicholas Adidjaja
- Darren Christian Pramana

The implementation and traffic test videos remain in the [canonical team repository](https://github.com/Jozioo/Vehicle-Detecion---MOG). They are linked rather than copied here so the original repository and team context remain clear.

## Current limitations

- The ROI is frame-relative but still a fixed rectangular proportion, not a learned or scene-adaptive region.
- Nighttime headlights and reflections can be classified as foreground by MOG2.
- Closely queued vehicles can merge into one foreground blob.
- The current count is cumulative, so it is not equivalent to instantaneous queue occupancy.
- Evaluation is qualitative because the tested videos do not include frame-level ground-truth annotations.
- The prototype displays a timing estimate; it does not connect to or control a live traffic signal.

## Next steps

Potential improvements include low-light YOLO integration, automatic ROI recalibration, instantaneous queue-length estimation, vehicle classification, multi-intersection coordination, and quantitative benchmarking on an annotated traffic dataset.
