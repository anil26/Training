'use strict';

import storageMocker from './support/StorageMocker';

// Global constants to be mocked.
global.localStorage = storageMocker();
