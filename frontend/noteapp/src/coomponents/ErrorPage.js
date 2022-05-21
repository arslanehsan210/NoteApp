import React from 'react'

export default function ErrorPage({err}) {
  return (
    <div className="alert alert-danger" role="alert">
  {err}
</div>
  )
}
