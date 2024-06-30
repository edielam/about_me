// src/extend.js
import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { BoxGeometry } from 'three';

extend({ TextGeometry, BoxGeometry });
