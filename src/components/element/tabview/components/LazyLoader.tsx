import React, { useEffect, useState, memo } from 'react'

type LazyLoaderProps = {
  isLazyLoadingEnabled: boolean
  onMount: () => void
  children?: any
}

const LazyLoader: React.FC<LazyLoaderProps> = ({ isLazyLoadingEnabled, onMount, children }) => {
  const [shouldRenderChildren, setShouldRenderChildren] = useState(false)

  useEffect(() => {
    onMount()
  }, [onMount])

  useEffect(() => {
    if (isLazyLoadingEnabled) {
      setTimeout(() => {
        setShouldRenderChildren(true)
      })
    }
  }, [isLazyLoadingEnabled])

  if (!isLazyLoadingEnabled || (isLazyLoadingEnabled && shouldRenderChildren)) {
    return <>{children}</>
  }
  return null
}

export default memo(LazyLoader)
