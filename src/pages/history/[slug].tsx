import { PROJECTS } from '@/const/page/ProjectData'
import type { Project } from '@/const/page/ProjectData'

import { ProjectDetailPage } from '@/components/pages/ProjectDetailPage'

import type { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: PROJECTS.map(project => ({ params: { slug: project.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<{ project: Project }> = async ({ params }) => {
  const project = PROJECTS.find(item => item.slug === params?.slug)
  if (!project) return { notFound: true }
  return { props: { project } }
}

export default ProjectDetailPage
