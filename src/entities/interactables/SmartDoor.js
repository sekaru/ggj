import Interactable from '../Interactable';

export default class extends Interactable{
	
	constructor(scene, x, y, direction){
		super({scene, x, y, key: 'smart_door'});
		this.setStatic(true);
    // this.triggered();
    this.originalX = x;
	}

	trigger(icon){
    this.triggered = !this.triggered;
    this.doneAnimating = false;
        this.scene.tweens.add({
	        targets: this,
	        x: this.triggered ? this.originalX - 32 : this.originalX,
	        y: this.y,
	        duration: 150,
	        onComplete: () => this.doneAnimating = true,
	        onCompleteParams: [this]
      });
      
      if(this.triggered) {
        icon.setTexture('lock_on');
      } else {
        icon.setTexture('lock_off');        
      }
  }

  closed() {
    return this.triggered && this.doneAnimating;
  }
}