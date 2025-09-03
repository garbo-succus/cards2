import { ExtrudeGeometry, Shape, BufferAttribute } from "three";

class RoundedCardGeometry extends ExtrudeGeometry {
  constructor(
    width = 0.0635,
    height = 0.089,
    thickness = 0.0003,
    cornerRadius = 0.003,
    segments = 8,
  ) {
    // Create the rounded rectangle shape
    const shape = new Shape();

    const w = width / 2;
    const h = height / 2;
    const r = Math.min(cornerRadius, Math.min(w, h));

    // Start from bottom-left corner and go clockwise
    shape.moveTo(-w, -h + r);

    // Left side
    shape.lineTo(-w, h - r);

    // Top-left corner
    shape.quadraticCurveTo(-w, h, -w + r, h);

    // Top side
    shape.lineTo(w - r, h);

    // Top-right corner
    shape.quadraticCurveTo(w, h, w, h - r);

    // Right side
    shape.lineTo(w, -h + r);

    // Bottom-right corner
    shape.quadraticCurveTo(w, -h, w - r, -h);

    // Bottom side
    shape.lineTo(-w + r, -h);

    // Bottom-left corner
    shape.quadraticCurveTo(-w, -h, -w, -h + r);

    // Extrude settings
    const extrudeSettings = {
      depth: thickness,
      bevelEnabled: false,
      curveSegments: segments,
      steps: 1,
    };

    super(shape, extrudeSettings);

    this.type = "RoundedCardGeometry";

    this.parameters = {
      width: width,
      height: height,
      thickness: thickness,
      cornerRadius: cornerRadius,
      segments: segments,
    };

    // Set up material groups for different faces
    this.setupMaterialGroups();

    // Generate UV coordinates for textures
    this.generateUVs();
  }

  setupMaterialGroups() {
    // Clear existing groups
    this.clearGroups();

    // ExtrudeGeometry creates faces in this order:
    // - Front face (shape face)
    // - Back face (extruded face)
    // - Side faces (extruded walls)

    const positions = this.attributes.position.array;
    const normals = this.attributes.normal.array;
    const vertexCount = positions.length / 3;

    // Count vertices by analyzing normals
    let frontVertices = 0;
    let backVertices = 0;
    let sideVertices = 0;

    for (let i = 0; i < vertexCount; i++) {
      const normalIndex = i * 3;
      const nz = normals[normalIndex + 2]; // Z component

      if (nz > 0.5) {
        frontVertices++;
      } else if (nz < -0.5) {
        backVertices++;
      } else {
        sideVertices++;
      }
    }

    // For non-indexed geometry, count vertices
    if (!this.index) {
      // Add groups based on vertex order (front, back, sides)
      this.addGroup(0, frontVertices, 0); // front face
      this.addGroup(frontVertices, backVertices, 1); // back face
      this.addGroup(frontVertices + backVertices, sideVertices, 2); // sides
    } else {
      // Handle indexed geometry
      const indices = this.index.array;
      const triangleCount = indices.length / 3;

      let frontTriangles = 0;
      let backTriangles = 0;
      let sideTriangles = 0;

      for (let i = 0; i < triangleCount; i++) {
        const vertexIndex = indices[i * 3] * 3;
        const nz = normals[vertexIndex + 2];

        if (nz > 0.5) {
          frontTriangles++;
        } else if (nz < -0.5) {
          backTriangles++;
        } else {
          sideTriangles++;
        }
      }

      this.addGroup(0, frontTriangles * 3, 0);
      this.addGroup(frontTriangles * 3, backTriangles * 3, 1);
      this.addGroup((frontTriangles + backTriangles) * 3, sideTriangles * 3, 2);
    }
  }

  generateUVs() {
    const positions = this.attributes.position.array;
    const normals = this.attributes.normal.array;
    const vertexCount = positions.length / 3;
    const uvs = new Float32Array(vertexCount * 2);

    const width = this.parameters.width;
    const height = this.parameters.height;

    for (let i = 0; i < vertexCount; i++) {
      const posIndex = i * 3;
      const uvIndex = i * 2;
      const normalIndex = i * 3;

      const x = positions[posIndex];
      const y = positions[posIndex + 1];
      const nz = normals[normalIndex + 2];

      // Map UV coordinates for front and back faces
      if (Math.abs(nz) > 0.5) {
        // Front or back face - map based on x,y position
        uvs[uvIndex] = (x + width / 2) / width; // U coordinate
        uvs[uvIndex + 1] = (y + height / 2) / height; // V coordinate
      } else {
        // Side faces - simple mapping
        uvs[uvIndex] = 0.5;
        uvs[uvIndex + 1] = 0.5;
      }
    }

    this.setAttribute("uv", new BufferAttribute(uvs, 2));
  }

  copy(source) {
    super.copy(source);
    this.parameters = Object.assign({}, source.parameters);
    return this;
  }

  static fromJSON(data) {
    return new RoundedCardGeometry(
      data.width,
      data.height,
      data.thickness,
      data.cornerRadius,
      data.segments,
    );
  }
}

export { RoundedCardGeometry };
