import MapLayoutManager from './MapLayoutManager';
import {DynamicPhysicsObject, SphereObject, DynamicsType} from './utility/pinball_types';
import {Graphics} from 'pixi.js';

export class DynamicRenderer{
    private _primitives : Graphics;
    private _mapLayout: MapLayoutManager;

    constructor(mapLayout: MapLayoutManager) {
        this._primitives = new Graphics();
        this._mapLayout = mapLayout;
    }

    public get get_primitive_grapics () { return this._primitives; };

    draw(dynamics: any[]) {
        this._primitives.clear();
        const lens = dynamics.length;

        // console.log(lens);
        for (let i = 0; i < lens; i++) {
            let d_obj = dynamics[i];

            if (d_obj.type == null || d_obj.type == undefined) continue;

            if (d_obj.type ==  DynamicsType.Sphere)
                this.draw_sphere(d_obj as SphereObject);
        }
    }

    private draw_sphere(sphere : SphereObject) {
        this._primitives.beginFill(0x8FD5FF, 1);
        this._primitives.drawCircle(sphere.position.x, this._mapLayout.height - sphere.position.y, sphere.radius);
        this._primitives.endFill();
    }

}