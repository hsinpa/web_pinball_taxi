import MapLayoutManager from './MapLayoutManager';
import {PhysicsTransform} from './utility/pinball_types';
import {Graphics} from 'pixi.js';

export class DynamicRenderer{
    private _primitives : Graphics;
    private _mapLayout: MapLayoutManager;

    constructor(mapLayout: MapLayoutManager) {
        this._primitives = new Graphics();
        this._mapLayout = mapLayout;
    }

    public get get_primitive_grapics () { return this._primitives; };

    draw(dynamics: PhysicsTransform[]) {
        this._primitives.clear();
        const lens = dynamics.length;

        //console.log(lens);
        for (let i = 0; i < lens; i++) {
            let d_obj = dynamics[i];

            let sprite = this._mapLayout.get_sprite(d_obj.id);

            sprite.rotation = d_obj.rotation;

            sprite.position.set(d_obj.position.x, this._mapLayout.height - d_obj.position.y );
            //this.draw_sphere(d_obj as SphereObject);
        }
    }

    private draw_sphere(sphere : PhysicsTransform) {
        this._primitives.beginFill(0x8FD5FF, 1);
        this._primitives.drawCircle(sphere.position.x, this._mapLayout.height - sphere.position.y, sphere.radius);
        this._primitives.endFill();
    }

}