// import insertfinancialReport from "./insertInvestorPresentation";

import insertFinancialReport from "./insertFinancialReport";
import insertHOA from "./insertHOA";
import insertNAE from "./insertNAE";
import migrateAccess from "./migrate/access";
import migrateContent from "./migrate/content";
import migrateContentSlider from "./migrate/slider";
import { migrateAccessV2 } from "./migrateV2/access";
import migrateCompanyWebPageV2 from "./migrateV2/companyWebPage";
import migrateContentV2 from "./migrateV2/content";
import getAllContentSlider from "./slider/getAllContentSlider";
import testConnection from "./testConnection";

// step 1
// testConnection()

// step 2
// migrateCompanyWebPageV2()

// step 3
migrateAccessV2()

// step 4
// migrateContentV2()
