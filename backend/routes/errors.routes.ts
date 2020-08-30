import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.use(
  [
    // URI
    /^\/api\/?.*$/i,

    // Paths
    /^\/static\/?.*$/i,
    /^\/vendor\/?.*$/i,

    // File extensions
    /.+\.html?$/i,
    /.+\.xml?$/i,
    /.+\.svg$/i,
    /.+\.gif$/i,
    /.+\.png$/i,
    /.+\.jpe?g$/i,
    /.+\.bmp$/i,
    /.+\.js$/i,
    /.+\.s?css$/i,
    /.+\.pdf$/i,
    /.+\.json$/i,
    /.+\.zip$/i,
    /.+\.rar$/i,
    /.+\.xlsx?$/i,
    /.+\.docx?$/i,
    /.+\.csv$/i,
    /.+\.exe$/i,
    /.+\.tsx?$/i,
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const { method, url, baseUrl } = req;

    next({
      statusCode: 404,
      message: 'Not found',
      details: { method, url, baseUrl },
    });
  }
);

router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode: number = parseInt(err?.statusCode) || 500;

  const jsonResponse = {
    ok: false,
    message: err?.message,
  };

  console[statusCode >= 500 ? 'error' : 'warn']('Error!', err);

  res.status(statusCode).json(jsonResponse);
});

export default router;
