import { gql } from "@apollo/client";

const AllServiceQueries = gql`
  query dashboardFeedformQuery {
    services(publicationState: LIVE, pagination: { limit: 10000000 }) {
      data {
        id
        attributes {
          service_name
          category
          service_cateogory
          pdf {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const DashboardFeedformQuery = gql`
  query dashboardFeedformQuery {
    services(
      filters: { service_cateogory: { contains: "Feedform" } }
      pagination: { limit: 1000000 }

      sort: []
      publicationState: LIVE
    ) {
      data {
        id
        attributes {
          service_name
          category
          service_cateogory
          pdf {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const DashboardAccountingQuery = gql`
  query dashboardAccountingQuery {
    services(
      filters: { service_cateogory: { contains: "Accounting" } }
      pagination: { limit: 1000000 }

      sort: []
      publicationState: LIVE
    ) {
      data {
        id
        attributes {
          service_name
          category
          service_cateogory
          pdf {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const DashboardAuditQuery = gql`
  query dashboardAuditQuery {
    services(
      filters: { service_cateogory: { contains: "Audit" } }
      pagination: { limit: 1000000 }

      sort: []
      publicationState: LIVE
    ) {
      data {
        id
        attributes {
          service_name
          category
          service_cateogory
          pdf {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const DashboardRegistrationQuery = gql`
  query dashboardRegistrationQuery {
    services(
      filters: { service_cateogory: { contains: "Registration" } }
      pagination: { limit: 1000000 }
      sort: []
      publicationState: LIVE
    ) {
      data {
        id
        attributes {
          service_name
          category
          service_cateogory
          pdf {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export {
  AllServiceQueries,
  DashboardFeedformQuery,
  DashboardAccountingQuery,
  DashboardAuditQuery,
  DashboardRegistrationQuery,
};
