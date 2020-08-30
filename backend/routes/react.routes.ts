import { Router } from 'express';
import path from 'path';
import express from 'express';

// Requiere que esté buildeado el frontend

const REACT_PATH = path.resolve(__dirname, '..', '..', 'frontend', 'build');

const router = Router();

router.use(
  express.static(REACT_PATH, {
    redirect: true,
  })
);

// URLs en las cuales debe responder React
router.get(
  [
    /*
    Aplica a:
      - /
      - /api
      - /foo/bar

    No aplica a:
      - /foo.bar
      - /foo/bar.txt
    */
    /^\/[^\.]*(?!\..+)$/i,
  ],
  (req, res) => res.sendFile(path.resolve(REACT_PATH, 'index.html'))
);

export default router;
