# AngularNgxsShop

PoC Ngxs. 

--**WIP**--

## Installation

`$ npm i && ng serve`


## Architecture


### Feature module
```
 |-- shop
    |-- components
        |-- product-item
        |-- product-preview
    |-- containers
        |-- filter-product
        |-- list-products
    |-- models
        |-- product
    |-- store
        |-- actions
            |-- product.action.ts
            |-- filter.action.ts
        |-- models
            |-- product.model.ts
            |-- filter.model.ts
        |-- states
            |-- product.state.ts
            |-- filter.state.ts
    |-- shop.component.html
    |-- shop.component.css
    |-- shop.component.ts
    |-- shop.module.ts
    |-- shop.routing.module.ts
    |-- shop-facade.service.ts
            
```

#### Components
- Should be a module
- All components should be DUMP. Have only `@Input()` & `@Output()`.
- Add `ChangeDetectionStrategy.OnPush` for avoid memory leak.

#### Containers

- Is a module
- Use a `NGXS facade service` for accessing and modifying `NGXS Store`. (see `list-products-facade.service.ts`)
- The components shouldn't have logic data. Use the `Ngxs State`. 

