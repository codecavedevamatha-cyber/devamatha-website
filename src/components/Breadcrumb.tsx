import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import SchemaOrg from "./SchemaOrg";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.devamathacollege.ac.in/",
    },
  ];

  const breadcrumbs = [{ name: "Home", path: "/" }];

  let accumulatedPath = "";

  pathnames.forEach((name, index) => {
    accumulatedPath += `/${name}`;
    const isLast = index === pathnames.length - 1;

    const formattedName = name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    breadcrumbs.push({
      name: formattedName,
      path: accumulatedPath,
    });

    breadcrumbItems.push({
      "@type": "ListItem",
      position: index + 2,
      name: formattedName,
      item: `https://www.devamathacollege.ac.in${accumulatedPath}`,
    });
  });

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        data={{ breadcrumbs: breadcrumbItems }}
      />
      <nav className="bg-background/50 border-b border-border/50">
        <div className="container flex min-h-14 items-center gap-2 pl-6 text-sm text-muted-foreground sm:pl-14 md:pl-11 lg:pl-9 xl:pl-9">
          <Link
            to="/"
            className="flex items-center hover:text-foreground transition-colors"
          >
            <Home className="w-4 h-4" />
          </Link>
          {breadcrumbs.slice(1).map((breadcrumb, index) => (
            <React.Fragment key={breadcrumb.path}>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
              {index === breadcrumbs.length - 2 ? (
                <span className="text-foreground font-medium">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link
                  to={breadcrumb.path}
                  className="hover:text-foreground transition-colors"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Breadcrumb;
