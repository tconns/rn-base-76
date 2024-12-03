export function formatTime(timeInSeconds: number): string {
  if (typeof timeInSeconds !== 'number' || timeInSeconds < 0) {
    return '00:00'
  }

  const hours = Math.floor(timeInSeconds / 3600)
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
  const seconds = Math.floor(timeInSeconds % 60)

  const formattedHours = hours > 0 ? `${hours.toString().padStart(2, '0')}:` : ''
  const formattedMinutes = `${minutes.toString().padStart(2, '0')}:`
  const formattedSeconds = seconds.toString().padStart(2, '0')

  return `${formattedHours}${formattedMinutes}${formattedSeconds}`
}

export function calculateProgress(currentValue: number, maxValue: number): string {
  if (typeof currentValue !== 'number' || typeof maxValue !== 'number' || maxValue <= 0) {
    return '0.000'
  }

  const progress = (currentValue / maxValue) * 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100) // Ensure the progress is between 0 and 100
  return clampedProgress.toFixed(3) // Format to three decimal places
}
