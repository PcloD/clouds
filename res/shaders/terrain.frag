#version 450

layout(location = 0) in float height;
layout(location = 1) in float dist;
layout(location = 2) in vec2 pos;
layout(location = 3) in vec2 uv;

layout(location = 0) out vec4 fcolor;

uniform sampler2D terrain_texture;


void main () {
	vec3 fog = vec3(0.3, 0.3, 0.7) * smoothstep(300, 500, dist) * 1;
	vec3 terrain = 0.9 * vec3(0.45, 0.68, 0.2) + clamp(height, -0.8, 1.0) * vec3(0.3, 0.3, 0.1) * 1.5 * texture(terrain_texture, uv * 100).rgb;
	vec3 color = terrain + fog;
	fcolor = vec4(color, smoothstep(580, 330, dist));
	//fcolor = vec4(uv.xy, 0, 1);
}