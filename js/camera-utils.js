const boundaryVertex = new Float32Array(3);
const viewBoundaryVertex = new Float32Array(3);
export function updateNearFar(sceneBoundary, viewMatrices, projMatrixParameters) {
    let near = Number.POSITIVE_INFINITY;
    let far = Number.NEGATIVE_INFINITY;

    // Vertex 1
    boundaryVertex[0] = sceneBoundary.min[0];
    boundaryVertex[1] = sceneBoundary.min[1];
    boundaryVertex[2] = sceneBoundary.min[2];

    for (let i = 0; i < viewMatrices.length; ++i) {
        vec3.transformMat4(viewBoundaryVertex, boundaryVertex, viewMatrices[i]);
        near = Math.min(-viewBoundaryVertex[2], near);
        far = Math.max(-viewBoundaryVertex[2], far);
    }

    // Vertex 2
    boundaryVertex[0] = sceneBoundary.min[0];
    boundaryVertex[1] = sceneBoundary.min[1];
    boundaryVertex[2] = sceneBoundary.max[2];

    for (let i = 0; i < viewMatrices.length; ++i) {
        vec3.transformMat4(viewBoundaryVertex, boundaryVertex, viewMatrices[i]);
        near = Math.min(-viewBoundaryVertex[2], near);
        far = Math.max(-viewBoundaryVertex[2], far);
    }

    // Vertex 3
    boundaryVertex[0] = sceneBoundary.min[0];
    boundaryVertex[1] = sceneBoundary.max[1];
    boundaryVertex[2] = sceneBoundary.min[2];

    for (let i = 0; i < viewMatrices.length; ++i) {
        vec3.transformMat4(viewBoundaryVertex, boundaryVertex, viewMatrices[i]);
        near = Math.min(-viewBoundaryVertex[2], near);
        far = Math.max(-viewBoundaryVertex[2], far);
    }

    // Vertex 4
    boundaryVertex[0] = sceneBoundary.min[0];
    boundaryVertex[1] = sceneBoundary.max[1];
    boundaryVertex[2] = sceneBoundary.max[2];

    for (let i = 0; i < viewMatrices.length; ++i) {
        vec3.transformMat4(viewBoundaryVertex, boundaryVertex, viewMatrices[i]);
        near = Math.min(-viewBoundaryVertex[2], near);
        far = Math.max(-viewBoundaryVertex[2], far);
    }

    // Vertex 5
    boundaryVertex[0] = sceneBoundary.max[0];
    boundaryVertex[1] = sceneBoundary.min[1];
    boundaryVertex[2] = sceneBoundary.min[2];

    for (let i = 0; i < viewMatrices.length; ++i) {
        vec3.transformMat4(viewBoundaryVertex, boundaryVertex, viewMatrices[i]);
        near = Math.min(-viewBoundaryVertex[2], near);
        far = Math.max(-viewBoundaryVertex[2], far);
    }

    // Vertex 6
    boundaryVertex[0] = sceneBoundary.max[0];
    boundaryVertex[1] = sceneBoundary.min[1];
    boundaryVertex[2] = sceneBoundary.max[2];

    for (let i = 0; i < viewMatrices.length; ++i) {
        vec3.transformMat4(viewBoundaryVertex, boundaryVertex, viewMatrices[i]);
        near = Math.min(-viewBoundaryVertex[2], near);
        far = Math.max(-viewBoundaryVertex[2], far);
    }

    // Vertex 7
    boundaryVertex[0] = sceneBoundary.max[0];
    boundaryVertex[1] = sceneBoundary.max[1];
    boundaryVertex[2] = sceneBoundary.min[2];

    for (let i = 0; i < viewMatrices.length; ++i) {
        vec3.transformMat4(viewBoundaryVertex, boundaryVertex, viewMatrices[i]);
        near = Math.min(-viewBoundaryVertex[2], near);
        far = Math.max(-viewBoundaryVertex[2], far);
    }

    // Vertex 8
    boundaryVertex[0] = sceneBoundary.max[0];
    boundaryVertex[1] = sceneBoundary.max[1];
    boundaryVertex[2] = sceneBoundary.max[2];

    for (let i = 0; i < viewMatrices.length; ++i) {
        vec3.transformMat4(viewBoundaryVertex, boundaryVertex, viewMatrices[i]);
        near = Math.min(-viewBoundaryVertex[2], near);
        far = Math.max(-viewBoundaryVertex[2], far);
    }

    // Done!
    projMatrixParameters.near = Math.max(near, 0.1);
    projMatrixParameters.far = far;
}

const cameraRotation = mat4.create();
const axis = vec3.create();
export function orbitCamera(eye, look, up, x, y) {
    vec3.subtract(eye, eye, look);
    vec3.cross(axis, up, eye);
    vec3.normalize(axis, axis);
    vec3.cross(up, eye, axis);
    vec3.normalize(up, up);

    mat4.fromRotation(cameraRotation, x, up);
    mat4.rotate(cameraRotation, cameraRotation, y, axis);

    vec3.transformMat4(eye, eye, cameraRotation);
    vec3.add(eye, eye, look);
}

export function zoomCamera(eye, look, zoom) {
    vec3.subtract(eye, eye, look);
    vec3.normalize(eye, eye);
    vec3.scale(eye, eye, zoom);
    vec3.add(eye, eye, look);
}
