export function setupInteractions(canvas, handlers = {}) {
    const {onDrag = () => {}, onWheel = () => {}, onPinch = () => {}} = handlers;

    let dragging = false;
    let lastX = -1;
    let lastY = -1;
    const DRAG_SCALE = 0.01;
    canvas.addEventListener("mousedown", e => {
        e.stopPropagation();
        e.preventDefault();

        dragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
    });

    canvas.addEventListener("mousemove", e => {
        if (!dragging) {
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        let dx = -(e.clientX - lastX) * DRAG_SCALE;
        let dy = -(e.clientY - lastY) * DRAG_SCALE;

        onDrag(dx, dy);

        //orbitCamera(eye, look, up, dx, dy)
        lastX = e.clientX;
        lastY = e.clientY;
    });

    document.addEventListener("mouseup", e => {
        dragging = false;
        lastX = -1;
        lastY = -1;
    });

    const WHEEL_SCALE = 0.11;
    
    canvas.addEventListener("wheel", e => {
        e.stopPropagation();
        e.preventDefault();

        onWheel(Math.sign(e.deltaY) * WHEEL_SCALE);

        // zoom += Math.sign(e.deltaY) * WHEEL_SCALE;
        // zoom = Math.max(MIN_ZOOM, Math.min(zoom, MAX_ZOOM));
        // zoomCamera(eye, look, zoom);
    });

    const PINCH_SCALE = 0.05;
    let touchDragging = false;
    let touchPinching = false;
    let lastTouchX = -1;
    let lastTouchY = -1;
    let lastTouchX2 = -1;
    let lastTouchY2 = -1;
    canvas.addEventListener("touchstart", e => {
        e.stopPropagation();
        e.preventDefault();

        if (e.touches.length === 1) {
            touchDragging = true;
            touchPinching = false;
            const touch = e.touches[0];
            lastTouchX = touch.clientX;
            lastTouchY = touch.clientY;
        } else {
            touchPinching = true;
            touchDragging = false;
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            lastTouchX = touch1.clientX;
            lastTouchY = touch1.clientY; 

            lastTouchX2 = touch2.clientX;
            lastTouchY2 = touch2.clientY;   
        }
    });

    canvas.addEventListener("touchmove", e => {
        if (!touchDragging && !touchPinching) {
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        if (touchDragging) {
            const touch = e.touches[0];

            const dx = -(touch.clientX - lastTouchX) * DRAG_SCALE;
            const dy = -(touch.clientY - lastTouchY) * DRAG_SCALE;

            onDrag(dx, dy);
            // orbitCamera(eye, look, up, dx, dy)
            
            lastTouchX = touch.clientX;
            lastTouchY = touch.clientY;
        } else {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];

            const dx1 = touch1.clientX - lastTouchX;
            const dy1 = touch1.clientY - lastTouchY;
            const dx2 = touch2.clientX - lastTouchX2;
            const dy2 = touch2.clientY - lastTouchY2;

            const pinching = dx1 * dx2 + dy1 + dy2 < 0;

            if (pinching) {
                const separationX = touch2.clientX - touch1.clientX;
                const separationY = touch2.clientY - touch1.clientY;
                const lastSeparationX = lastTouchX2 - lastTouchX;
                const lastSeparationY = lastTouchY2 - lastTouchY;

                const separation = Math.sqrt(separationX * separationX + separationY * separationY);
                const lastSeparation = Math.sqrt(lastSeparationX * lastSeparationX + lastSeparationY * lastSeparationY);

                onPinch((lastSeparation - separation) * PINCH_SCALE);
                // zoom += (lastSeparation - separation) * PINCH_SCALE;
                // zoom = Math.max(MIN_ZOOM, Math.min(zoom, MAX_ZOOM));
                // zoomCamera(eye, look, zoom);
            }

            lastTouchX = touch1.clientX;
            lastTouchY = touch1.clientY;
            lastTouchX2 = touch2.clientX;
            lastTouchY2 = touch2.clientY;
        }
    });

    document.addEventListener("touchend", e => {
        if (e.touches.length === 0) {
            touchDragging = false;
            touchPinching = false;
            lastTouchX = -1;
            lastTouchY = -1;
            lastTouchX2 = -1;
            lastTouchY2 = -1;
        } else if (e.touches.length === 1) {
            touchDragging = true;
            touchPinching = false;
            lastTouchX2 = -1;
            lastTouchY2 = -1;
        }
    });
}
