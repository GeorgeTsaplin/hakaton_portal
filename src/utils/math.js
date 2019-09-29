export function clamp(min, max, n) {
	if (n > max)
		return max
	if (n < min)
		return min
	return n
}