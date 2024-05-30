find . -type f -exec sed -r -i "s/import (.*) from '(.*)'/import \1 from '\2.ts'/g" {} +
find . -type f -exec sed -r -i "s/export (.*) from '(.*)'/export \1 from '\2.ts'/g" {} +
find . -type f -exec sed -r -i "s/} from '(.*)'/} from '\1.ts'/g" {} +
find . -type f -exec sed -r -i "s/.ts.ts/.ts/g" {} +
