import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export const selectConfigSlice = (state: RootState) => state.config

export const selectAllConfig = createSelector(selectConfigSlice, (s) => s)

export const selectIsInReview = createSelector(selectConfigSlice, (s) => s.config.isInReview)
