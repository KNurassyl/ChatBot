import './vaadin-featureflags.js';

import '../index';

import 'Frontend/generated/jar-resources/vaadin-dev-tools/vaadin-dev-tools.js';

import './theme-spring-boot-react-langchain-chatgpt.global.generated.js';
import { applyTheme } from './theme.js';
applyTheme(document);
//@ts-ignore
if (import.meta.env.DEV) {
    import("Frontend/generated/jar-resources/dev-tools-database.js");
}
