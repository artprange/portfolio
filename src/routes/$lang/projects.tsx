import { createFileRoute } from '@tanstack/react-router'

import { Projects } from '../../pages/projects'

export const Route = createFileRoute('/$lang/projects')({
  component: Projects,
})
