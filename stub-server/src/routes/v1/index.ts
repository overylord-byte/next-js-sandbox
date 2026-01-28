import {Router} from 'express';
import {helloRouter} from '@routes/v1/hello.route';
import {searchRouter} from "@routes/v1/search.route";
import {redirectRouter} from "@routes/v1/redirect.route";

export const v1Router = Router();

v1Router.use('/hello', helloRouter);
v1Router.use('/search', searchRouter);
v1Router.use('/redirect', redirectRouter);