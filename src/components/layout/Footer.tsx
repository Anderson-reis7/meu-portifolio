export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container mx-auto px-4 text-center">
        <p>© {currentYear} Anderson Reis. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
